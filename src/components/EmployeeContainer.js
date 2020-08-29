import React, { Component } from "react";
import API from "../../utils/API";
import Header from "./Header";
import Container from "./Container"


class EmployeeContainer extends Component {
    state = {
      users: []
    };
  
    // When this component mounts, search for the movie "The Matrix"
    componentDidMount() {
        API.search()
        .then(({data:{results}}) => {
          console.log(results)
          let users = results.map(person => {
            return {
              id: person.id.vaule, 
              name: person.name.first + person.name.last,
              address: person.location.city,
              email: person.email,
              phone: person.phone
            }
          })
          this.setState({ users })
        })
    };

    render() {
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
            <ReactTable
            employees = {employees}
            data = {this.state.users}
            ></ReactTable>
        )
      }

// End   
}

export default EmployeeContainer;