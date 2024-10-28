import { Card, HStack, Stack, Strong, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LuCheck, LuX } from "react-icons/lu";

const TestimonialCards = () => {
  return (
    <div className="grid grid-cols-4 p-5 justify-center gap-x-0 gap-y-3 max-md:grid-cols-2 max-sm:grid-cols-1">
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root
        width="320px"
        className="bg-white text-black border-2 border-black max-sm:mx-auto"
      >
        <Card.Body>
          <HStack mb="6" gap="3">
            <Avatar
              src="https://images.unsplash.com/photo-1511806754518-53bada35f930"
              name="Nate Foss"
            />
            <Stack gap="0">
              <Text fontWeight="bold" textStyle="sm">
                Nate Foss
              </Text>
              <Text color="fg.muted" textStyle="sm">
                @natefoss
              </Text>
            </Stack>
          </HStack>
          <Card.Description color={"blackAlpha.700"}>
            <Strong color="blackAlpha.900" fontWeight={"bold"}>
              Nate Foss{" "}
            </Strong>
            has requested to join your team. You can approve or decline their
            request.
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="subtle"
            colorPalette="red"
            flex="1"
            className="bg-red-800 text-white hover:bg-red-700"
          >
            <LuX />
            Decline
          </Button>
          <Button
            variant="subtle"
            colorPalette="blue"
            flex="1"
            className="bg-blue-800 text-white hover:bg-blue-700"
          >
            <LuCheck />
            Approve
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default TestimonialCards;
