import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        <ThemeSwitch />
      </div>
      <div className="mt-1 flex justify-center gap-1 text-center text-sm text-gray-500 dark:text-gray-600"></div>
      <div className="mt-2 flex items-center justify-between">
        <div className="mt-5"></div>
      </div>
    </Container>
  );
}


