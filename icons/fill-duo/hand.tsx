import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand({
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
          d="M15 3.25C14.448 3.25 14 3.698 14 4.25V7.5C14 7.776 13.776 8 13.5 8C13.224 8 13 7.776 13 7.5V2.75C13 2.198 12.552 1.75 12 1.75C11.448 1.75 11 2.198 11 2.75V7.5C11 7.776 10.776 8 10.5 8C10.224 8 9.99998 7.776 9.99998 7.5V1.5C9.99998 0.948 9.55198 0.5 8.99998 0.5C8.44798 0.5 7.99998 0.948 7.99998 1.5V7.5C7.99998 7.776 7.77598 8 7.49998 8C7.22398 8 6.99998 7.776 6.99998 7.5V2.75C6.99998 2.198 6.55198 1.75 5.99998 1.75C5.44798 1.75 4.99998 2.198 4.99998 2.75V10.583L3.31198 8.562C2.88598 8.019 2.09698 7.927 1.55698 8.351C1.01698 8.775 0.952976 9.482 1.34598 10.106L2.94898 12.498C4.22198 14.249 5.12398 16.999 8.99898 16.999H10.999C13.76 16.999 15.999 14.76 15.999 11.999V4.25C15.999 3.698 15.551 3.25 14.999 3.25H15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Hand;
