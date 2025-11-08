import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Particle from "../Particle";
import { Container } from "react-bootstrap";
import axios from "axios";

function Blog() {
  const [posts, setPosts] = useState([]);

  const getPostData = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@siddharthsonii"
      )
      .then((res) => {
        setPosts(res.data.items);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  };

  // Function to extract image URL from description
  const getImageUrl = (description) => {
    const match = description.match(/<img[^>]+src=["'](.*?)["']/i);
    return match ? match[1] : "https://via.placeholder.com/400x200";
  };

  // Function to extract excerpt from <p> tag in description
  const getExcerpt = (description) => {
    const match = description.match(/<p>(.*?)<\/p>/i);
    if (match && match[1]) {
      const text = match[1].replace(/<[^>]+>/g, ""); // Remove any nested HTML tags
      return text.length > 100 ? text.substring(0, 100) + "..." : text + "...";
    }
    return "No description available...";
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <h1 className="project-heading">
        My Recent <strong className="purple">Articles </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few articles that I've written recently.
      </p>
      <div className="container my-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((post) => (
            <div key={post.guid} className="col">
              <Card border="info" style={{ width: "18rem", height: "24rem" }}>
                <Card.Img
                  variant="top"
                  src={getImageUrl(post.description)}
                  alt={post.title}
                  style={{ height: "9rem", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title
                    className="mb-2"
                    style={{ fontSize: "1rem", minHeight: "3rem" }}
                  >
                    <b>{post.title}</b>
                  </Card.Title>
                  <Card.Text
                    className="mb-2"
                    style={{ fontSize: "0.9rem", flexGrow: 1 }}
                  >
                    {getExcerpt(post.description)}
                  </Card.Text>
                  <hr className="my-2" />
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto"
                  >
                    <Button variant="primary" size="sm">
                      Read More
                    </Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

// export default Blog;
