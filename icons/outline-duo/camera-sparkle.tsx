import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CameraSparkle({
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
          d="M10.5 2.95701C10.5 3.85614 11.0739 4.66273 11.9362 4.9492L12.739 5.21734L13.007 6.02135C13.2942 6.87963 14.0988 7.45701 15 7.45701C15.0844 7.45701 15.1678 7.45198 15.25 7.44217V13.25C15.25 14.3546 14.3546 15.25 13.25 15.25H4.75C3.64543 15.25 2.75 14.3546 2.75 13.25V4.75C2.75 3.64543 3.64543 2.75 4.75 2.75C5.42387 2.75 10.5 2.5211 10.5 2.95701ZM9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.589 2.38801L16.074 1.88201L15.569 0.367012C15.405 -0.122988 14.594 -0.122988 14.43 0.367012L13.925 1.88201L12.41 2.38801C12.165 2.46901 12 2.69901 12 2.95701C12 3.21501 12.165 3.44501 12.41 3.52601L13.925 4.03201L14.43 5.54701C14.512 5.79201 14.742 5.95701 15 5.95701C15.258 5.95701 15.487 5.79201 15.57 5.54701L16.075 4.03201L17.59 3.52601C17.835 3.44501 18 3.21501 18 2.95701C18 2.69901 17.834 2.47001 17.589 2.38801Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.7665 2.75H4.75C3.645 2.75 2.75 3.646 2.75 4.75V13.25C2.75 14.354 3.645 15.25 4.75 15.25H13.25C14.355 15.25 15.25 14.354 15.25 13.25V8.1877"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CameraSparkle;
