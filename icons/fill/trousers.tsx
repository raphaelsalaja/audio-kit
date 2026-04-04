import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trousers({
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
          d="M3.02699 16.462C2.69399 16.115 2.52099 15.658 2.54199 15.178L2.94707 5.5L15.0518 5.50001L15.454 15.177C15.475 15.658 15.302 16.113 14.969 16.461C14.636 16.809 14.186 17 13.705 17H11.858C10.986 17 10.259 16.375 10.128 15.513L9.11899 8.85401C9.09999 8.73301 8.89699 8.73401 8.87699 8.85401L7.86799 15.513C7.73799 16.376 7.00999 17.001 6.13799 17.001H4.29099C3.80899 17.001 3.35999 16.809 3.02699 16.462Z"
          fill={fill}
        />
        <path
          d="M12 4H15V2.75C15 1.785 14.215 1 13.25 1H12V4Z"
          fill={secondaryfill}
        />
        <path d="M10.5 1H7.5V4H10.5V1Z" fill={secondaryfill} />
        <path
          d="M4.75 1H6V4H3V2.75C3 1.785 3.785 1 4.75 1Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Trousers;
