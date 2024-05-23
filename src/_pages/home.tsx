'use client';

import LocaleSwitcher from '@/features/LocaleSwitcher/LocaleSwitcher';
import ThemeSwitcher from '@/features/ThemeSwitcher/ThemeSwitcher';
import Button from '@/shared/ui/Button/Button';
import Heading from '@/shared/ui/Heading/Heading';
import Input from '@/shared/ui/Input/Input';
import Link from '@/shared/ui/Link/Link';
import List from '@/shared/ui/List/List';
import Text from '@/shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../app/[lang]/reducers';
import { getTodosAction } from '../../app/[lang]/todos.slice';
import { dictionaryType } from '../../getDictionary';

export default function Home({
  dictionary,
}: {
  // dictionary: ReturnType<typeof getDictionary>;
  // dictionary: Promise<typeof getDictionary>;
  // dictionary: typeof getDictionary;
  dictionary: dictionaryType;
}) {
  const {
    todos: { data, isLoading },
  } = useSelector((state: StateType) => {
    return state.todos;
  });
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getTodosAction());
  };

  return (
    <div>
      <header>
        <Heading as="h1">Home page</Heading>
        <Text as="p">{dictionary.textWelcome.welcome}</Text>
        <LocaleSwitcher />
        <ThemeSwitcher />
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
        <Button onClick={handleClick}>Click me!</Button>
        <div>
          <Link href="/todo">Go to Todo page</Link>
        </div>
      </header>

      <section>
        {isLoading ? <span>Loading...</span> : <List data={data} />}
      </section>
    </div>
  );
}
