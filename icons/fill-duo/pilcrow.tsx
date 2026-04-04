import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pilcrow({
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
          d="M8.25098 1.18331C8.66519 1.18331 9.00098 1.5191 9.00098 1.93331V16.25C9.00098 16.6642 8.66519 17 8.25098 17C7.83676 17 7.50098 16.6642 7.50098 16.25V1.93331C7.50098 1.5191 7.83676 1.18331 8.25098 1.18331Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.251 1.33928C12.6652 1.33928 13.001 1.67507 13.001 2.08928V16.25C13.001 16.6642 12.6652 17 12.251 17C11.8368 17 11.501 16.6642 11.501 16.25V2.08928C11.501 1.67507 11.8368 1.33928 12.251 1.33928Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.50098 1C5.01576 1 3.00098 3.01479 3.00098 5.5C3.00098 7.98489 5.01523 9.99947 7.5 10V8.5C5.84366 8.49947 4.50098 7.15646 4.50098 5.5C4.50098 3.84321 5.84419 2.5 7.50098 2.5H14.251C14.6652 2.5 15.001 2.16421 15.001 1.75C15.001 1.33579 14.6652 1 14.251 1H7.50098Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pilcrow;
