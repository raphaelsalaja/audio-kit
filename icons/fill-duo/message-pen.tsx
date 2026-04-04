import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessagePen({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m17.3614,9.7208l-.1677-.1677-.1677-.1677c-.6602-.6616-1.813-.6611-2.4751-.0005l-3.1612,3.1611c-.0806.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1431.1431.3345.2197.5303.2197.082,0,.1646-.0132.2446-.041l2.6709-.9209c.1074-.0371.2051-.0981.2856-.1787l3.1611-3.1611c.3306-.3306.5127-.77.5127-1.2373,0-.4678-.182-.9072-.5126-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9.0155,14.5973l.7774-2.2547c.1113-.3222.2947-.6159.5361-.8573l3.1624-3.1623c.9299-.9277,2.3362-1.1655,3.5086-.7072v-3.3658c0-1.517-1.233-2.75-2.75-2.75H3.75c-1.517,0-2.75,1.233-2.75,2.75v7c0,1.517,1.233,2.75,2.75,2.75h1.25v2.25c0,.288.165.551.425.676.104.05.215.074.325.074.167,0,.333-.056.469-.165l2.7965-2.2377Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MessagePen;
