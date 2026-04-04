import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Typography({
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
          d="M3.99998 2C3.7159 2 3.4562 2.1605 3.32916 2.41459L2.57916 3.91459C2.39392 4.28507 2.54409 4.73558 2.91457 4.92082C3.28505 5.10606 3.73556 4.95589 3.9208 4.58541L4.46351 3.5H8.25V14.5H6.75C6.33579 14.5 6 14.8358 6 15.25C6 15.6642 6.33579 16 6.75 16H9H11.25C11.6642 16 12 15.6642 12 15.25C12 14.8358 11.6642 14.5 11.25 14.5H9.75V3.5H13.5365L14.0792 4.58541C14.2644 4.95589 14.7149 5.10606 15.0854 4.92082C15.4559 4.73558 15.606 4.28507 15.4208 3.91459L14.6708 2.41459C14.5438 2.1605 14.2841 2 14 2H9H3.99998Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Typography;
