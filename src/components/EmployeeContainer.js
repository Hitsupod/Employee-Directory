import React, { Component } from "react";
import API from "../utils/API";
// import Header from "./Header";
import Table from "./Container"



class EmployeeContainer extends Component {
    state = {
      users: [],
      filter: "firstName",
    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        API.search()
        .then(({data:{results}}) => {
          console.log(results)
          let users = results.map((person, index) => {
            return {
              id: person.id.vaule, 
              name: person.name.first + person.name.last,
              firstName: person.name.first,
              lastName:person.name.last,
              address: person.location.city,
              email: person.email,
              phone: person.phone,
              key: index
            }
          })
          this.setState({ users })
        })
    };

    render() {
      return (
        <div className="container">
            <div className="row" >
              <h1>Employee Director</h1>
            </div>
          
          <div className="row">
            <table className="table">

              {[...this.state.users].map((item) => 
              <Table 
              id={item.id}
              firstName={item.firstName}
              lastName={item.lastName}
              address={item.address}
              email={item.email}
              phone={item.phone}
              />
              )}
            </table>
          </div>
        </div>
      );
    }

    /*render() {
        const employees = [
            {
                Header: "ID",
                identifier: "id",
                filterable: true,
            },
            {
                Header: "Name",
                identifier: "name",
                filterable: true, 
            },
            {
                Header: "City",
                identifier: "address",
            },
            {
                Header: "Email",
                identifier: "email",
            },
            {
                Header: "Phone",
                identifier: "phone",
            }
        ]
        return(
            <Header />
            <ReactTable
            employees = {employees}
            data = {...this.state.users}
            ></ReactTable>
        )
      }
*/
// End   
}

export default EmployeeContainer;