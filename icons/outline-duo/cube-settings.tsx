import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CubeSettings({
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
          d="m8.25,9l5.9852-3.4656c-.1722-.301-.4219-.5574-.7322-.7375l-4.25-2.4648c-.621-.3601-1.386-.3601-2.007,0l-4.249,2.4648c-.617.3582-.997,1.0171-.997,1.73v4.946c0,.7131.38,1.3721.997,1.7302l4.25,2.4648c.3105.1802.6567.2649,1.003.2629v-6.9309Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m14.233,5.53l-5.983,3.47-5.983-3.47"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m8.25,15.938v-6.938"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.5,7.5433v-1.0163c0-.713-.38-1.372-.997-1.73l-4.25-2.465c-.621-.36-1.386-.36-2.007,0l-4.249,2.465c-.617.358-.997,1.017-.997,1.73v4.946c0,.713.38,1.372.997,1.73l4.25,2.465c.3105.1802.6568.2684,1.003.2666"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14"
          x2="14"
          y1="10.5"
          y2="11.5"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.2981"
          x2="15.591"
          y1="11.4519"
          y2="12.159"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="17.25"
          x2="16.25"
          y1="13.75"
          y2="13.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="16.2981"
          x2="15.591"
          y1="16.0481"
          y2="15.341"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="14"
          x2="14"
          y1="17"
          y2="16"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.7019"
          x2="12.409"
          y1="16.0481"
          y2="15.341"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="10.75"
          x2="11.75"
          y1="13.75"
          y2="13.75"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11.7019"
          x2="12.409"
          y1="11.4519"
          y2="12.159"
        />
        <circle
          cx="14"
          cy="13.75"
          fill="none"
          r="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CubeSettings;
