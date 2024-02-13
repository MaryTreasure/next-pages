import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import Paragraph from "../Paragraph/Paragraph";
import Tag from "../Tag/Tag";
import Rating from "../Rating/Rating";
import { withLayout } from "@/HOC/withLayout/withLayout";

const HomePage = () => {
  const [direction, setDirection] = useState<"right" | "down">("right");

  const [rating, setRating] = useState(1);

  const onChange = (value: number) => {
    setRating(value)

  }

  return (
    <>
      <Heading>Text</Heading>
      <Heading level={2}>Text</Heading>
      <Button>Button</Button>
      <Button variant="ghost">Button</Button>
      <Button
        onClick={() =>
          direction === "right" ? setDirection("down") : setDirection("right")
        }
        variant="ghost"
        arrow={direction}
      >
        Button
      </Button>
      <Paragraph size="14">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills
      </Paragraph>
      <Paragraph size="16">
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills
      </Paragraph>
      <Paragraph size="18">
        туденты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и 
      </Paragraph>
      <Tag color="primary" size= 'sm'> Tag</Tag>
      <Tag color="red" size= 'md'> Tag</Tag>
      <Tag color="ghost" size= 'sm'>Tag</Tag>
      <Tag color="green" size= 'sm'>Tag</Tag>

      <Rating rating={rating} setRating={onChange} isEditable={true}/>
    </>
  );
};

export default withLayout(HomePage);
