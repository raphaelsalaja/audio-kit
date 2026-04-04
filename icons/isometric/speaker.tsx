import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Speaker({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M12 21.5C15.3137 21.5 18 20.433 18 18.5V17L15.145 18.1719L12 18.5L8.76297 18.1719L6 17V18.5C6 20.433 8.68629 21.5 12 21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M18 17V18.5C18 20.433 15.3137 21.5 12 21.5C8.68629 21.5 6 20.433 6 18.5V17"
          stroke={fill}
        />
        <path
          d="M16 7.46219C16 8.45378 14.2091 9.25763 12 9.25763C9.79086 9.25763 8 8.45378 8 7.46219C8 6.47059 9.79086 5.66675 12 5.66675C14.2091 5.66675 16 6.47059 16 7.46219Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20 7C20 9.48528 16.4183 11.5 12 11.5C7.58172 11.5 4 9.48528 4 7C4 4.51472 7.58172 2.5 12 2.5C16.4183 2.5 20 4.51472 20 7Z"
          stroke={fill}
        />
        <path
          d="M16 7.46219C16 8.45378 14.2091 9.25763 12 9.25763C9.79086 9.25763 8 8.45378 8 7.46219C8 6.47059 9.79086 5.66675 12 5.66675C14.2091 5.66675 16 6.47059 16 7.46219Z"
          stroke={fill}
        />
        <path
          d="M20 7V14C20 16.4853 16.4183 18.5 12 18.5C7.58172 18.5 4 16.4853 4 14V7"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Speaker;
