import React from "react";
import { Card, Button } from "@blueprintjs/core";
import { Table } from 'reactstrap';

const PostCard = props => {
  const { id, userId, title, body } = props.post;
  const { dispatch } = props;

  const handleEdit = () => {
    // tightly coupled, but you have more control over it
    dispatch({ type: "EDIT_POST", payload: props.post });
  };

  return (<>
    <Table>
    <thead>
      <tr>
        <th>Client</th>
        <th>Job ID </th>
        <th>Job Name</th>
        <th>client name </th>
        <th>Openings </th>
        <th>Posted Date </th>
        <th>candidates</th>
        <th>Interveiws</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>01</td>
        <td>React developer</td>
        <td>xyz client</td>
        <td>15-06-2020</td>
        <td>10</td>
        <td>5</td>
        <td>Active</td>
        <td>15</td>
        <Button icon="edit" minimal onClick={handleEdit} />
        <Button icon="tick-circle" minimal onClick={handleEdit} />
        <Button icon="delete" minimal onClick={handleEdit} />
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>01</td>
        <td>React developer</td>
        <td>xyz client</td>
        <td>15-06-2020</td>
        <td>10</td>
        <td>5</td>
        <td>Submitted</td>
        <td>15</td>
        <Button icon="edit" minimal onClick={handleEdit} />
        <Button icon="tick-circle" minimal onClick={handleEdit} />
        <Button icon="delete" minimal onClick={handleEdit} />
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>01</td>
        <td>React developer</td>
        <td>xyz client</td>
        <td>15-06-2020</td>
        <td>10</td>
        <td>5</td>
        <td>Interviews</td>
        <td>15</td>
        <Button icon="edit" minimal onClick={handleEdit} />
        <Button icon="tick-circle" minimal onClick={handleEdit} />
        <Button icon="delete" minimal onClick={handleEdit} />
      </tr>
    </tbody>
  </Table>
    
    </>
  );
};

export default PostCard;
