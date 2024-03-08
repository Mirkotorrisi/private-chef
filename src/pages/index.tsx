import type { HeadFC, PageProps } from "gatsby";
import { WrappedComponentProps, injectIntl } from "gatsby-plugin-intl";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import Card from "../components/Card";
import Language from "../components/Language";

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <main className="w-full h-full bg-slate-500 flex flex-col px-4 lg:px-20 xl:px-40 gap-10">
      <Language />
      <h1>
        <FormattedMessage id="base-msg" />
      </h1>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <Card
          key={n}
          title={"Card number " + n}
          img={"https://cataas.com/cat?tag=" + n}
          paragraph={
            "Lorem ipsum dolor sit amet gesù cristo a cavallo di uno gnuLorem ipsum dolor sit amet gesù cristo a cavallo di uno gnu Lorem ipsum "
          }
          url={"www.google.com"}
        />
      ))}
    </main>
  );
};

export default injectIntl(
  IndexPage as unknown as React.ComponentType<WrappedComponentProps<"intl">>
);

export const Head: HeadFC = () => <title>Home Page</title>;
