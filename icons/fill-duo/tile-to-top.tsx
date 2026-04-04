import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TileToTop({
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
          d="M3.75009 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5H3.75009C2.23349 15.5 1.00009 14.2666 1.00009 12.75V5.25C1.00009 3.7334 2.23349 2.5 3.75009 2.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.53041 9.71973C9.38391 9.57323 9.19251 9.5 9.00011 9.5C8.80771 9.5 8.61631 9.57323 8.46981 9.71973L6.46981 11.7197C6.17681 12.0127 6.17681 12.4873 6.46981 12.7802C6.76281 13.0731 7.2374 13.0732 7.5303 12.7802L8.25001 12.0605V14.75C8.25001 15.1641 8.58591 15.5 9.00001 15.5C9.41411 15.5 9.75001 15.1641 9.75001 14.75V12.0605L10.4697 12.7802C10.7627 13.0732 11.2373 13.0732 11.5302 12.7802C11.8231 12.4872 11.8232 12.0126 11.5302 11.7197L9.53041 9.71973Z"
          fill={fill}
        />
        <path
          d="M13.2501 5H4.75009C4.33588 5 4.00009 5.33579 4.00009 5.75V7.25C4.00009 7.66421 4.33588 8 4.75009 8H13.2501C13.6643 8 14.0001 7.66421 14.0001 7.25V5.75C14.0001 5.33579 13.6643 5 13.2501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TileToTop;
