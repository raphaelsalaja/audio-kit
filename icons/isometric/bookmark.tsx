import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bookmark({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M18.854 21.464L15.6133 23.0651L15.7676 8.21144L18.7383 6.64893L18.854 21.464Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M15.717 8.05599L18.6461 6.60266" stroke={fill} />
        <path
          d="M5.14601 4.13185C5.14602 3.38515 5.93469 2.90185 6.6 3.24084L14.7461 7.39147C15.4162 7.73291 15.8381 8.42141 15.8381 9.17349L15.8381 23.0011C15.8381 23.2491 15.5159 23.3457 15.3794 23.1387L10.9796 16.4653C10.7013 16.0432 10.1517 15.8952 9.69912 16.1205L5.86878 18.0268C5.53638 18.1922 5.146 17.9505 5.146 17.5792L5.14601 4.13185Z"
          stroke={fill}
        />
        <path
          d="M5.67505 3.25421L8.46069 1.90722C8.87966 1.70463 9.36893 1.70798 9.78509 1.91629L18.0097 6.03313C18.5175 6.28733 18.8383 6.80655 18.8383 7.37447V21.0479C18.8383 21.4278 18.623 21.7749 18.2827 21.9437L15.7171 23.2167"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Bookmark;
