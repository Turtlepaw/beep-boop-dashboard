import { GetServerSideProps } from 'next';
import { Html, Head, Main, NextScript } from 'next/document'
import NavMenu from '../components/navMenu';
import { parseUser } from '../utils/parse-user';
import { DiscordUser } from '../utils/types';

export interface Props {
    user: DiscordUser;
}

export default function Document({ user }: Props) {
  return (
    <Html>
      <Head>
            <link rel="icon" href="/robot.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <NavMenu user={user}/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async function (ctx) {
    const user = await parseUser(ctx);

    return { props: { user } };
  };