import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

// interface
// data
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    let cell = _.get(item, column.path);

    if (column.link) cell = <Link to={`/movies/${item._id}`}>{cell}</Link>;

    return cell;
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
