import { Button, Card, Image, Text } from "@chakra-ui/react";
import { perfume } from "../data/constants";

const CardItem = () => {
  return (
    <div className="lg:flex lg:flex-wrap gap-5 justify-center grid grid-cols-2 sm:gap-2 max-sm:grid-cols-1">
      {perfume.map((item) => (
        <Card.Root
          maxW="sm"
          overflow="hidden"
          className="mt-10 border-2 border-black max-sm:mx-auto"
          key={item.id}
        >
          <Image
            src={item.image_path}
            alt={item.name}
            className="max-h-[250px]"
          />
          <Card.Body gap="2">
            <Card.Title>{item.name}</Card.Title>
            <Card.Description>{item.details}</Card.Description>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              ${item.price}
            </Text>
          </Card.Body>
          <Card.Footer className="flex justify-between">
            <Button
              variant="solid"
              className="border-2 border-slate-800 w-[100px] bg-zinc-900"
            >
              Buy now
            </Button>
            <Button
              variant="ghost"
              className="border-2 border-slate-800 w-[100px] bg-teal-100 text-black"
            >
              Add to cart
            </Button>
          </Card.Footer>
        </Card.Root>
      ))}
    </div>
  );
};

export default CardItem;
