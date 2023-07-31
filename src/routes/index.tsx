import {
  component$,
  Resource,
  useResource$,
  useSignal,
} from '@builder.io/qwik';

import type { DocumentHead } from '@builder.io/qwik-city';
import { fetchGlobal } from '~/lib/api';

import Hero from '~/components/hero/hero';

export default component$(() => {
  const globalResource = useResource$(async () => {
    try {
      const data = await fetchGlobal();

      return data;
    } catch (error) {
      console.error('Error occurred while fetching global:', error);
      throw error;
    }
  });
  return (
    <>
      <Hero />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Code & Design Collective',
  meta: [
    {
      name: 'description',
      content: 'Code & Design Collective website',
    },
  ],
};
