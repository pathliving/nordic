import ThemeSwitcher from '@/features/ThemeSwitcher/ThemeSwitcher';
import Heading from '@/shared/ui/Heading/Heading';
import Input from '@/shared/ui/Input/Input';
import Link from '@/shared/ui/Link/Link';
import Text from '@/shared/ui/Text/Text';
// import { Ui } from '@nordic/ui';

export default function Home() {
  return (
    <div>
      <header>
        <Heading as="h1">Landing page</Heading>
        <ThemeSwitcher />
        {/* <Ui /> */}
        <Text as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, impedit
          soluta consectetur quia molestiae minima facilis beatae illo saepe
          sequi, dignissimos veritatis qui non expedita magni neque eos. Labore,
          tempora? Laboriosam quibusdam tempora vel non sint beatae, distinctio
          consequatur temporibus dolores ipsa amet voluptate possimus facere ea
          corporis quasi dolore voluptas libero aliquid! Autem ipsum delectus
          maxime, voluptate sint debitis. Quis id libero, ad, natus dolore
          corrupti fuga perspiciatis iste earum molestiae dolor reiciendis
          praesentium quos delectus accusantium eaque. Praesentium sint
          deleniti, sed aperiam accusamus nulla ipsam asperiores voluptatem
          explicabo! Necessitatibus commodi tenetur possimus! Quas quia laborum
          quod aliquid, placeat ad ab magni error at voluptas! Incidunt numquam
          omnis illum, quaerat dolorum cumque, rerum repellendus harum quasi, ab
          maiores mollitia! Reprehenderit sequi ut, quasi dolore neque, vero,
          enim dignissimos sed pariatur doloremque maxime error minima vel
          voluptatum iste reiciendis officia. Veritatis, sint velit! Reiciendis
          impedit, beatae distinctio neque in quas.
        </Text>
        <Text as="p">
          <strong>Read more</strong> about this page
        </Text>
        <Input
          // size="2"
          placeholder="Reply to"
        />
        <div>
          <Link href="/todo">Go to Todo page</Link>
        </div>
      </header>
    </div>
  );
}
