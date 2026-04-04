import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function JoinedHands({
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
          d="m16.25,15l-2-2v-5.5596c0-.2901-.0631-.5768-.185-.84l-1.8696-4.0394c-.2771-.5988-.9595-.8941-1.5857-.6864h0c-.644.2137-1.0145.8875-.85,1.5457l1.1049,4.4218"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m11.75,12v-2.875c0-.7594-.6156-1.375-1.375-1.375h0c-.7594,0-1.375.6156-1.375,1.375v4.0466c0,.5304.2107,1.0391.5858,1.4142l1.6642,1.6642"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m1.75,15l2-2v-5.5596c0-.2901.0631-.5768.185-.84l1.8696-4.0394c.2771-.5988.9595-.8941,1.5857-.6864h0c.644.2137,1.0145.8875.85,1.5457l-1.1049,4.4218"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.25,12v-2.875c0-.7594.6156-1.375,1.375-1.375h0c.7594,0,1.375.6156,1.375,1.375v4.0466c0,.5304-.2107,1.0391-.5858,1.4142l-1.6642,1.6642"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default JoinedHands;
