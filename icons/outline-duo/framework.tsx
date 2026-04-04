import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Framework({
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
          d="m3.747,4.797l4.25-2.465c.621-.36,1.386-.36,2.007,0l4.25,2.465c.617.358.997,1.017.997,1.73v4.946c0,.713-.38,1.372-.997,1.73l-4.25,2.465c-.621.36-1.386.36-2.007,0l-4.25-2.465c-.617-.358-.997-1.017-.997-1.73v-4.946c0-.713.38-1.372.997-1.73Zm2.003,2.318l3.25-1.885,3.25,1.885v3.77l-3.25,1.885-3.25-1.885v-3.77Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m5.75,7.115l-2.733-1.585"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.983,5.53l-2.733,1.585"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,15.938v-3.168"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.997,2.332l-4.25,2.465c-.617.358-.997,1.017-.997,1.73v4.946c0,.713.38,1.372.997,1.73l4.25,2.465c.621.36,1.386.36,2.007,0l4.25-2.465c.617-.358.997-1.017.997-1.73v-4.946c0-.713-.38-1.372-.997-1.73l-4.25-2.465c-.621-.36-1.386-.36-2.007,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9,5.23l-3.25,1.885v3.77l3.25,1.885,3.25-1.885v-3.77l-3.25-1.885Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polygon
          fill={fill}
          points="9 5.23 9 9 5.75 10.885 9 12.77 12.25 10.885 12.25 7.115 9 5.23"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Framework;
