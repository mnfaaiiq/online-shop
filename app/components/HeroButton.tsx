import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { RiArrowRightLine, RiMailLine } from "react-icons/ri";

const HeroButton = () => {
  return (
    <HStack className="flex justify-center">
      <Button
        colorPalette={"teal"}
        size={"lg"}
        className="bg-teal-500 w-[100px] text-white"
        variant="solid"
      >
        <RiMailLine /> <a href="https://www.gmail.com">Email</a>
      </Button>
      <Button
        colorPalette="teal"
        size="lg"
        className="w-[105px] bg-black text-white border-2 border-teal-500 p-5"
        variant="outline"
      >
        <a href="https://www.whatsapp.com">Call us</a>{" "}
        <RiArrowRightLine color="teal.500" />
      </Button>
    </HStack>
  );
};

export default HeroButton;
