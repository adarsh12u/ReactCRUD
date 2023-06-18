import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      employee: [
        { id: 11, name: "adarsh", salary: 3355, surnaame: "gurjar" },
        { id: 22, name: "akihl", salary: 3355, surnaame: "gurjar" },
        { id: 33, name: "akash", salary: 3355, surnaame: "sahu" },
        { id: 44, name: "depesh", salary: 3355, surnaame: "jadam" },
        { id: 55, name: "kalu", salary: 3355, surnaame: "bhalu" },
        { id: 66, name: "rishab", salary: 3355, surnaame: "sisodiya" },
      ],
    };
  }

  update = (id, name, salary, surnaame) => {
    this.delete(id);

    this.idbox.value = id;
    this.namebox.value = name;
    this.salabox.value = salary;
    this.surbox.value = surnaame;
  };

  delete = (id) => {
    const ans = this.state.employee.filter((value, index) => id !== value.id);

    this.setState({ employee: [...ans] });
  };

  func = () => {
    var correct = 0;

    if (
      this.idbox.value === "" ||
      this.namebox.value === "" ||
      this.salabox.value === "" ||
      this.surbox.value === ""
    ) {
      alert("All fields must be required");
      return
    } 
    
     if (correct==0) {
      this.state.employee.forEach((value) => {
        if (value.id == this.idbox.value) {
          correct = value.id;
        }
      });

      if (correct != 0) {
        alert("This person are already in list");
        return
      }
     
    }
     if ( this.idbox.value !== "" ){
      var values = {
        id: this.idbox.value,
        name: this.namebox.value,
        salary: this.salabox.value,
        surnaame: this.surbox.value,
      };
      this.setState({ employee: [...this.state.employee, values] });
      this.idbox.value = "";
      this.namebox.value = "";
      this.salabox.value = "";
      this.surbox.value = "";
    }
  };

  render() {
    return (
      <div className="mains">
        <div className="main" align="center">
          my first project in react
        </div>

        <div className="inputs">
          <input
            ref={(c) => (this.idbox = c)}
            type="text"
            placeholder="write person id"
            name="id"
          ></input>
          <input
            ref={(c) => (this.namebox = c)}
            type="text"
            placeholder="write person name"
            name="name"
          ></input>
          <input
            ref={(c) => (this.salabox = c)}
            type="text"
            placeholder="write person salary"
            name="sala"
          ></input>
          <input
            ref={(c) => (this.surbox = c)}
            type="text"
            placeholder="write person surname"
            name="sur"
          ></input>

          <button onClick={this.func} className="submit">
            {" "}
            submit{" "}
          </button>
        </div>

        <div align="center " className="h1">
          {" "}
          <h1>"Guys Make Sure Your Id Is Unique"</h1>
        </div>
        <table align="center" cellPadding={20}>
          <tr>
            <th>S.no</th>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>surnaame</th>
            <th>delete</th>
            <th>update</th>
          </tr>

          {this.state.employee.map((value, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.salary}</td>
                <td>{value.surnaame}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => this.delete(value.id)}
                  >
                    delete
                  </button>
                </td>
                <td>
                  <button
                    className="update"
                    onClick={() =>
                      this.update(
                        value.id,
                        value.name,
                        value.salary,
                        value.surnaame
                      )
                    }
                  >
                    update
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}
export default App;
