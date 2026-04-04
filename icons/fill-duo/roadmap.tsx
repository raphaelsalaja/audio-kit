import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Roadmap({
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
          d="M10.25 12H4.04386C3.44866 12 2.89937 11.7012 2.57507 11.2012L0.119967 7.4073C-0.040233 7.1597 -0.040233 6.8404 0.119967 6.5928L2.57406 2.7998C2.89726 2.2993 3.44667 2 4.04377 2H10.2499C11.7665 2 12.9999 3.2334 12.9999 4.75V9.25C12.9999 10.7666 11.7666 12 10.25 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5 12H10.25C11.7666 12 12.9999 10.7666 12.9999 9.25V6H13.9561C14.5533 6 15.1026 6.2993 15.4258 6.7998L17.8799 10.5928C18.0401 10.8404 18.0401 11.1597 17.8799 11.4073L15.4248 15.2012C15.1006 15.7012 14.5513 16 13.956 16H7.7499C6.2333 16 5 14.7666 5 13.25V12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Roadmap;
