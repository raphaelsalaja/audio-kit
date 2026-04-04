import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MoveObjDownRight({
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
          d="M7.25 2H3.75C2.7835 2 2 2.7835 2 3.75V7.25C2 8.2165 2.7835 9 3.75 9H7.25C8.2165 9 9 8.2165 9 7.25V3.75C9 2.7835 8.2165 2 7.25 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 9.99001C14.836 9.99001 14.5 10.326 14.5 10.74V13.44L10.78 9.71999C10.487 9.42699 10.012 9.42699 9.71899 9.71999C9.42599 10.013 9.42599 10.488 9.71899 10.781L13.439 14.501H10.739C10.325 14.501 9.98901 14.837 9.98901 15.251C9.98901 15.665 10.325 16.001 10.739 16.001H15.249C15.663 16.001 15.999 15.665 15.999 15.251V10.7411C15.999 10.3271 15.663 9.99105 15.249 9.99105L15.25 9.99001Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MoveObjDownRight;
