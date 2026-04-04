import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Directions({
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
          d="M2.96428 2.19862C3.28443 1.91153 3.70026 1.75 4.13401 1.75H9.00001C9.41422 1.75 9.75001 2.08579 9.75001 2.5V6.5C9.75001 6.91421 9.41422 7.25 9.00001 7.25H4.13401C3.70242 7.25 3.28552 7.09088 2.96329 6.80049L1.5743 5.8015C0.801944 5.1062 0.802918 3.89569 1.57351 3.20023L2.96428 2.19862Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.0356 6.70149C14.7155 6.4144 14.2996 6.25287 13.8659 6.25287H8.99987C8.58566 6.25287 8.24987 6.58866 8.24987 7.00287V9.00287V11.0029C8.24987 11.4171 8.58566 11.7529 8.99987 11.7529H13.8659C14.2975 11.7529 14.7144 11.5938 15.0366 11.3034L16.4256 10.3044C17.1979 9.60907 17.197 8.39856 16.4264 7.7031L15.0356 6.70149Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.75 2.25C9.75 1.83579 9.41421 1.5 9 1.5C8.58579 1.5 8.25 1.83579 8.25 2.25V15H5.75C5.33579 15 5 15.3358 5 15.75C5 16.1642 5.33579 16.5 5.75 16.5H12.25C12.6642 16.5 13 16.1642 13 15.75C13 15.3358 12.6642 15 12.25 15H9.75V2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Directions;
