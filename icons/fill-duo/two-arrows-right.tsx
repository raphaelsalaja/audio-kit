import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TwoArrowsRight({
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
          d="M8.28 8.71999C7.987 8.42699 7.51199 8.42699 7.21899 8.71999C6.92599 9.01299 6.92599 9.48803 7.21899 9.78103L8.939 11.501H2.75C2.336 11.501 2 11.837 2 12.251C2 12.665 2.336 13.001 2.75 13.001H8.939L7.21899 14.721C6.92599 15.014 6.92599 15.489 7.21899 15.782C7.36499 15.928 7.55699 16.002 7.74899 16.002C7.94099 16.002 8.13301 15.929 8.27901 15.782L11.279 12.782C11.572 12.489 11.572 12.014 11.279 11.721L8.27901 8.72097L8.28 8.71999Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.78 2.71999C12.487 2.42699 12.012 2.42699 11.719 2.71999C11.426 3.01299 11.426 3.48803 11.719 3.78103L13.439 5.501H2.75C2.336 5.501 2 5.837 2 6.251C2 6.665 2.336 7.001 2.75 7.001H13.439L11.719 8.72097C11.426 9.01397 11.426 9.48901 11.719 9.78201C11.865 9.92801 12.057 10.002 12.249 10.002C12.441 10.002 12.633 9.92901 12.779 9.78201L15.779 6.78201C16.072 6.48901 16.072 6.01397 15.779 5.72097L12.779 2.72097L12.78 2.71999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TwoArrowsRight;
