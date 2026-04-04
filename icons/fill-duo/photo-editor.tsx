import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoEditor({
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
          d="M11.4865 10.8712C11.4955 10.9963 11.5 11.1226 11.5 11.25C11.5 14.1492 9.14921 16.5 6.25 16.5C3.35079 16.5 1 14.1492 1 11.25C1 9.25359 2.11364 7.5194 3.75131 6.63135C3.75044 6.6708 3.75 6.71035 3.75 6.75C3.75 9.64921 6.10079 12 9 12C9.71659 12 10.4021 11.8568 11.0271 11.5946C11.3246 11.4698 11.4994 11.1757 11.4865 10.8712Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M14.2487 6.63174C13.5057 6.22883 12.6545 6 11.75 6C8.98589 6 6.72171 8.13504 6.51514 10.846C6.49078 11.1658 6.67067 11.4539 6.94481 11.5824C5.06681 10.7825 3.75 8.91988 3.75 6.75C3.75 3.85079 6.10079 1.5 9 1.5C11.8597 1.5 14.1858 3.78713 14.2487 6.63174Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 11.25C11.5 9.55914 10.6997 8.05359 9.45861 7.09454C9.18989 6.88688 8.82486 6.89006 8.56249 7.07859C8.54867 7.08917 8.5349 7.09982 8.52118 7.11053C8.53463 7.09935 8.54841 7.0887 8.56249 7.07859C9.44624 6.40226 10.5509 6 11.75 6C14.6492 6 17 8.35079 17 11.25C17 14.1492 14.6492 16.5 11.75 16.5C10.7423 16.5 9.79975 16.2155 9.00005 15.7228C10.5 14.7986 11.5 13.1409 11.5 11.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhotoEditor;
