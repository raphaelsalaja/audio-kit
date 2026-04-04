import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SearchChart({
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
          d="M10.7547 10.7547C11.0476 10.4618 11.5224 10.4618 11.8153 10.7547L15.7803 14.7197C16.0732 15.0126 16.0732 15.4874 15.7803 15.7803C15.4874 16.0732 15.0126 16.0732 14.7197 15.7803L10.7547 11.8153C10.4618 11.5224 10.4618 11.0476 10.7547 10.7547Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 7.75C2 4.57441 4.57441 2 7.75 2C10.9256 2 13.5 4.57441 13.5 7.75C13.5 10.9256 10.9256 13.5 7.75 13.5C4.57441 13.5 2 10.9256 2 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.9724 5.34064C13.3111 6.07348 13.5 6.88968 13.5 7.75001C13.5 10.9256 10.9256 13.5 7.75001 13.5C5.40158 13.5 3.38193 12.0921 2.48914 10.0743L5.53965 7.02474C5.966 6.60156 6.65837 6.59873 7.08635 7.02671L9.18606 9.1264L12.9724 5.34064Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SearchChart;
