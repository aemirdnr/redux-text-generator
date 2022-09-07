import Paragraph from "./Paragraph";
import Styles from "../style.module.sass";

function Box() {
  return (
    <div className={Styles.box}>
      <Paragraph
        param={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed consectetur eros, sit amet convallis arcu. Duis molestie dapibus sapien ac dapibus. Aenean tincidunt diam ipsum, hendrerit vestibulum ligula euismod at. Praesent nisl orci, egestas sed est vitae, malesuada tincidunt mi. Donec justo eros, facilisis at cursus ac, tincidunt eget risus. Praesent lacinia convallis risus a egestas. Curabitur condimentum risus a mi hendrerit commodo. Nulla mollis urna nec facilisis finibus. Integer tristique sodales enim, et sollicitudin sem fermentum at. Phasellus tempor libero lacus, sit amet mattis est rhoncus in. Phasellus dignissim tortor elit, non consectetur turpis suscipit feugiat. Ut blandit libero eu tortor tincidunt pellentesque. Etiam eleifend arcu non odio molestie ultrices. Donec sed ipsum urna."
        }
      />
      <Paragraph
        param={
          "Suspendisse turpis nulla, aliquet ac leo vitae, placerat ullamcorper arcu. Phasellus pretium neque nisl, rutrum fermentum erat placerat id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel rhoncus velit. Ut et ligula tincidunt, condimentum ex vitae, egestas magna. Suspendisse potenti. Pellentesque turpis purus, vehicula at elementum ac, hendrerit ac velit. Donec vitae ipsum vel nulla sodales consectetur. Suspendisse dapibus, lorem in auctor commodo, est ligula cursus mauris, in condimentum tortor orci sit amet ante. Fusce at viverra neque. Fusce tempus ullamcorper interdum. Nulla volutpat mi justo. Praesent risus ligula, dignissim id erat vitae, sagittis mattis augue. Curabitur eget ullamcorper magna. Quisque in varius massa."
        }
      />
      <Paragraph
        param={
          "Aliquam feugiat ex consectetur gravida varius. Nam luctus at purus sed tincidunt. Morbi nec eleifend orci. In sagittis lacus lectus, in mollis dolor tempus non. Aliquam non hendrerit purus, ac euismod turpis. Suspendisse aliquet a neque vel bibendum. Etiam mattis in erat nec porta. Ut eget mollis libero. Aliquam scelerisque leo sit amet elit condimentum rhoncus. Quisque in vestibulum velit. Proin massa quam, dapibus nec lectus in, blandit volutpat elit."
        }
      />
    </div>
  );
}

export default Box;
