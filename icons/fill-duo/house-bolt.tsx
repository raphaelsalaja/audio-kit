import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseBolt({
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
          d="M10.0593 1.36322C9.43341 0.886573 8.56698 0.887417 7.94127 1.36281L2.69155 5.35259C2.25589 5.68345 2 6.19868 2 6.746V14.25C2 15.7692 3.23079 17 4.75 17H13.25C14.7692 17 16 15.7692 16 14.25V6.746C16 6.20009 15.7448 5.68398 15.3088 5.35287L10.0593 1.36322Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.31725 6.32041C9.66244 6.48155 9.83199 6.87586 9.71149 7.23725L9.12369 9H11C11.2717 9 11.5222 9.14696 11.6547 9.38415C11.7873 9.62134 11.7811 9.91167 11.6387 10.1431L9.63874 13.3931C9.43909 13.7175 9.02793 13.8407 8.68275 13.6796C8.33756 13.5185 8.16801 13.1241 8.28851 12.7628L8.87631 11H7C6.72829 11 6.47783 10.853 6.34528 10.6159C6.21274 10.3787 6.21885 10.0883 6.36126 9.85693L8.36126 6.60693C8.56091 6.28249 8.97207 6.15926 9.31725 6.32041Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default HouseBolt;
