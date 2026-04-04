import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GraduationCap({
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
          d="M16.719 9.226C16.693 8.42 16.775 7.615 16.935 6.824C16.953 6.694 17 6.633 17 6.375C17 5.774 16.668 5.229 16.134 4.954L9.802 1.694C9.3 1.435 8.7 1.436 8.198 1.694L1.866 4.955C1.332 5.23 1 5.774 1 6.375C1 6.976 1.332 7.521 1.866 7.796L8.198 11.055C8.449 11.184 8.724 11.249 9 11.249C9.276 11.249 9.551 11.184 9.802 11.055L15.253 8.249C15.234 8.59 15.208 8.931 15.219 9.273C15.243 10.045 15.345 10.819 15.52 11.574C15.6 11.921 15.909 12.155 16.249 12.155C16.306 12.155 16.362 12.149 16.419 12.135C16.822 12.042 17.074 11.639 16.981 11.236C16.829 10.576 16.74 9.901 16.719 9.226Z"
          fill={fill}
        />
        <path
          d="M10.488 12.39C10.029 12.626 9.514 12.75 9 12.75C8.486 12.75 7.969 12.625 7.511 12.389L3.5 10.325V14.001C3.5 15.806 6.267 16.751 9 16.751C11.733 16.751 14.5 15.806 14.5 14.001V10.325L10.488 12.39Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default GraduationCap;
