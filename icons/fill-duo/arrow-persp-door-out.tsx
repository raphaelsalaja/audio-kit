import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowPerspDoorOut({
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
          d="M15.216 1.74499C14.749 1.41799 14.15 1.338 13.613 1.534L10.113 2.80701C9.424 3.05701 8.961 3.718 8.961 4.451V13.551C8.961 14.284 9.424 14.945 10.113 15.195L13.613 16.468C13.807 16.538 14.009 16.573 14.21 16.573C14.565 16.573 14.917 16.465 15.215 16.256C15.682 15.929 15.961 15.393 15.961 14.823V3.17799C15.961 2.60799 15.683 2.07199 15.216 1.74499Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.212 8.24999H4.52199L6.74199 6.02999C7.03499 5.73699 7.03499 5.26199 6.74199 4.96899C6.44899 4.67599 5.97399 4.67599 5.68099 4.96899L2.18099 8.46899C1.88799 8.76199 1.88799 9.23699 2.18099 9.52999L5.68099 13.03C5.82699 13.176 6.01899 13.25 6.21099 13.25C6.40299 13.25 6.59499 13.177 6.74099 13.03C7.03399 12.737 7.03399 12.262 6.74099 11.969L4.52099 9.74899H10.21C10.624 9.74899 10.96 9.41299 10.96 8.99899C10.96 8.58499 10.624 8.24899 10.21 8.24899L10.212 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowPerspDoorOut;
