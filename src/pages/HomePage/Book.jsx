import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Grid
} from "@material-ui/core";

const Book = ({ book, handleClick }) => {
  const { id, title, author, published_date, book_cover, quantity } = book;
  return (
    <Grid item xs={12} sm={6} md={6} lg={3}>
      <Card raised>
        <Grid container spacing={1} direction="row" justify="center" alignItems="center">
          <Grid item xs={4} sm={3}>
            <CardMedia
              image={book_cover}
              component="img"
              title={`${title} image`}
            />
          </Grid>

          <Grid item xs={8}>
            <CardContent>
              <Grid container direction="column" wrap="nowrap">
                <Typography component="h6" variant="h6">
                  {title}
                </Typography>
                <Typography noWrap variant="subtitle2" color="textSecondary">
                  {`ID: ${id}`}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {author}
                </Typography>
                <Typography noWrap variant="subtitle2" color="textSecondary">
                  {published_date}
                </Typography>
                <Typography noWrap variant="subtitle2" color="textSecondary">
                  {`Quantity: ${quantity}`}
                </Typography>

                <Grid container spacing={1}>
                  <Button variant="outlined" onClick={() => handleClick(book)}>
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Book;
