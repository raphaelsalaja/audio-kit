import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading5({
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
          d="M1.75 4C2.16421 4 2.5 4.33579 2.5 4.75V8.25H7V4.75C7 4.33579 7.33579 4 7.75 4C8.16421 4 8.5 4.33579 8.5 4.75V13.25C8.5 13.6642 8.16421 14 7.75 14C7.33579 14 7 13.6642 7 13.25V9.75H2.5V13.25C2.5 13.6642 2.16421 14 1.75 14C1.33579 14 1 13.6642 1 13.25V4.75C1 4.33579 1.33579 4 1.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.2146 4.68974C10.246 4.30016 10.5713 4 10.9621 4H15.7101C16.1243 4 16.4601 4.33579 16.4601 4.75C16.4601 5.16421 16.1243 5.5 15.7101 5.5H11.6541L11.5015 7.39361C13.1233 6.84976 14.9355 7.00479 16.0989 8.28953C17.4194 9.74765 17.1988 11.7422 16.0781 12.942C15.4644 13.5989 14.3511 14.0294 13.216 14C12.0312 13.9692 10.7539 13.4376 9.87254 12.0843C9.64648 11.7372 9.7446 11.2726 10.0917 11.0465C10.4388 10.8205 10.9034 10.9186 11.1295 11.2657C11.7147 12.1642 12.512 12.4812 13.2549 12.5005C14.0477 12.521 14.7156 12.2031 14.9819 11.918C15.6212 11.2338 15.7355 10.1228 14.9871 9.29641C14.1964 8.42326 12.5719 8.32268 11.0398 9.25136C10.7989 9.39735 10.4966 9.39611 10.257 9.24815C10.0173 9.10018 9.8808 8.83045 9.90343 8.54973L10.2146 4.68974Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Heading5;
