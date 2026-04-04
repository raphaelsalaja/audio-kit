import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EditTriangle({
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
          d="M8.03768 5.04538C8.38817 5.26613 8.49334 5.72921 8.27259 6.0797L4.13459 12.6497C3.91384 13.0002 3.45076 13.1054 3.10027 12.8846C2.74978 12.6639 2.64461 12.2008 2.86536 11.8503L7.00336 5.2803C7.22411 4.92981 7.68719 4.82463 8.03768 5.04538Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9.96227 5.04538C10.3128 4.82463 10.7758 4.92981 10.9966 5.2803L15.1346 11.8503C15.3553 12.2008 15.2502 12.6639 14.8997 12.8846C14.5492 13.1054 14.0861 13.0002 13.8654 12.6497L9.72736 6.0797C9.50661 5.72921 9.61178 5.26613 9.96227 5.04538Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 14.25C5 13.8358 5.33579 13.5 5.75 13.5H12.181C12.5952 13.5 12.931 13.8358 12.931 14.25C12.931 14.6642 12.5952 15 12.181 15H5.75C5.33579 15 5 14.6642 5 14.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.75 2.75C6.75 2.05197 7.31351 1.5 8 1.5H10C10.6865 1.5 11.25 2.05197 11.25 2.75V4.75C11.25 5.44803 10.6865 6 10 6H8C7.31351 6 6.75 5.44803 6.75 4.75V2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.5 13.25C1.5 12.552 2.06351 12 2.75 12H4.75C5.43649 12 6 12.552 6 13.25V15.25C6 15.948 5.43649 16.5 4.75 16.5H2.75C2.06351 16.5 1.5 15.948 1.5 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12 13.25C12 12.552 12.5635 12 13.25 12H15.25C15.9365 12 16.5 12.552 16.5 13.25V15.25C16.5 15.948 15.9365 16.5 15.25 16.5H13.25C12.5635 16.5 12 15.948 12 15.25V13.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EditTriangle;
