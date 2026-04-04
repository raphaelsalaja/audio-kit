import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePen({
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
          d="m7,2.25c0-.138.112-.25.25-.25h3.5c.138,0,.25.112.25.25v1.75h1.5v-1.75c0-.966-.784-1.75-1.75-1.75h-3.5c-.966,0-1.75.784-1.75,1.75v1.75h1.5v-1.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.748,15.8906l.9209-2.6699c.1104-.3193.2939-.6143.5332-.8545l3.1641-3.1641c.6123-.6133,1.4287-.9512,2.2979-.9512.4698,0,.9207.1064,1.3359.2942v-1.7952c0-1.5181-1.23-2.75-2.75-2.75H3.75c-1.519,0-2.75,1.2319-2.75,2.75v6.5c0,1.5181,1.231,2.75,2.75,2.75h4.9771c.0104-.0361.0087-.0737.021-.1094Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m17.2373,10.5986l-.3359-.3359c-.6816-.6826-1.793-.6826-2.4746,0l-3.1611,3.1611c-.0801.0806-.1416.1782-.1787.2856l-.9209,2.6709c-.0938.2715-.0244.5723.1787.7749.1426.1431.335.2197.5303.2197.082,0,.1641-.0132.2441-.041l2.6709-.9209c.1084-.0371.2061-.0981.2861-.1787l3.1611-3.1611c.3311-.3306.5127-.77.5127-1.2373,0-.4678-.1826-.9072-.5127-1.2373Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SuitcasePen;
