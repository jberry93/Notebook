// defined namespace
package main

// import needed packages
import (
  "log"
  "net/http"
  "github.com/gorilla/websocket"
)

var clients = make(map[*websocket.Conn]bool) // connected clients
var broadcast = make(chan Message) // broadcast channel

// upgrader: convert HTTP connection to WebSocket
var upgrader = websocket.Upgrader{
  CheckOrigin: func(r *http.Request) bool {
    return true
  },
}

// Message object:
type Message struct {
  Email    string `json:"email"`
  Username string `json:"username"`
  Message  string `json:"message"`
}

func main() {
  fs := http.FileServer(http.Dir("../public"))
  http.Handle("/", fs)

  // configure websocket route:
  http.HandleFunc("/ws", handleConnections)

  // start goroutine handleMessages:
  go handleMessages()

  // start server & log any errors:
  log.Println("http://localhost:8000")
  err := http.ListenAndServe(":8000", nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}

// handle incomming WebSocket connections:
func handleConnections(w http.ResponseWriter, r *http.Request) {
  // upgrade GET request to websocket
  ws, err := upgrader.Upgrade(w, r, nil)
  if err != nil {
    log.Fatal(err)
  }

  // close connection on return:
  defer ws.Close()

  // register new client:
  clients[ws] = true

  // inifinite loop waiting for new messages to WebSocket:
  for {
    var msg Message

    // read `msg` as JSON and map it to `Message`:
    err := ws.ReadJSON(&msg)
    if err != nil {
      log.Printf("error: %v", err)
      delete(clients, ws)
      break
    }

    // send message to broadcast channel:
    broadcast <- msg
  }
}

// continuously read from broadcast channel and relay message to all clients on WebSocket connection
func handleMessages() {
  for {
    // get `msg` from broadcast channel
    msg := <-broadcast

    // send `msg` out to all clients connected to WebSocket
    for client := range clients {
      err := client.WriteJSON(msg)
      if err != nil {
        log.Printf("error: %v", err)
        client.Close()
        delete(clients, client)
      }
    }
  }
}
