import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trash({
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
          d="M3.40771 5L3.90253 14.3892C3.97873 15.8531 5.18472 17 6.64862 17H11.3527C12.8166 17 14.0226 15.853 14.0988 14.3896L14.5936 5H3.40771Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 4H12V2.75C12 1.7852 11.2148 1 10.25 1H7.75C6.7852 1 6 1.7852 6 2.75V4H2.75C2.3359 4 2 4.3359 2 4.75C2 5.1641 2.3359 5.5 2.75 5.5H15.25C15.6641 5.5 16 5.1641 16 4.75C16 4.3359 15.6641 4 15.25 4ZM7.5 2.75C7.5 2.6143 7.6143 2.5 7.75 2.5H10.25C10.3857 2.5 10.5 2.6143 10.5 2.75V4H7.5V2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Trash;
