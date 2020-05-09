import React, { useState } from "react";
import { Card, Icon, Button, Confirm } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./researcher.css";
import { CardProps } from "../utils/props/researcher.props";

let e = "e";

function nameLink(name: string, id: number) {
  return (
    <div>
      <Link to={{ pathname: `/researchers/${id} ` }} id="linkName">
        {name}
      </Link>
    </div>
  );
}

export default function Researcher({
  id,
  name,
  email,
  age,
  rol,
  nationality,
  image,
  phenomena,
  handleDelete,
}: CardProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  function deleteResearcher() {
    handleDelete(id);
    setOpen(false);
  }

  return (
    <Card
      image={image}
      header={nameLink(name, id)}
      meta={`${rol} - ${phenomena.length} phenomena ☢️`}
      description={`This researcher is ${age} and is ${nationality} `}
      key={id}
      id="cardId"
      extra={
        <div>
          <Icon name="mail" />
          {email}
          {e === "e" && (
            <div className="ui two buttons delete">
              <Button
                basic
                color="red"
                style={{ marginTop: "10px" }}
                className="delete"
                onClick={() => setOpen(!isOpen)}
              >
                Delete
              </Button>
              <Confirm
                open={isOpen}
                onCancel={() => setOpen(!isOpen)}
                onConfirm={deleteResearcher}
              />
              <Button
                basic
                color="blue"
                style={{ marginTop: "10px" }}
                className="delete"
              >
                <Link
                  to={{ pathname: `/researcher/edit/${id} ` }}
                  style={{ color: "blue" }}
                >
                  Edit
                </Link>
              </Button>
            </div>
          )}
        </div>
      }
      centered
    />
  );
}
