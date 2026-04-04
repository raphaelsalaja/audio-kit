import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretLeftFromLine({
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
          d="M15.25 2.5C14.836 2.5 14.5 2.836 14.5 3.25V14.75C14.5 15.164 14.836 15.5 15.25 15.5C15.664 15.5 16 15.164 16 14.75V3.25C16 2.836 15.664 2.5 15.25 2.5Z"
          fill={fill}
        />
        <path
          d="M12.094 2.78494C11.534 2.47594 10.852 2.497 10.313 2.84L2.92997 7.52194C2.42097 7.84494 2.11798 8.39697 2.11798 8.99997C2.11798 9.60297 2.42197 10.155 2.92997 10.478L10.313 15.1599C10.599 15.3409 10.924 15.431 11.25 15.431C11.54 15.431 11.831 15.359 12.094 15.214C12.653 14.906 13 14.319 13 13.681V4.31796C13 3.67996 12.653 3.09194 12.094 2.78494Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default CaretLeftFromLine;
