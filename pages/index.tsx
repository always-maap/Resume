import { Container, Flex } from "../components/design-system";
import { Box } from "../components/design-system/box";

export default function Home() {
  return (
    <Container>
      <Box p={4}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h1>lorem ipsum</h1>
          <Flex gap={2}>
            <span>software eng</span>
            <span>tehran, iran</span>
            <span>(++98)9197532677</span>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
