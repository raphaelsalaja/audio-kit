import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bicycle2({
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
          d="M10.5 11.75C10.5 9.6789 12.1788 8 14.25 8C16.3212 8 18 9.6789 18 11.75C18 13.8211 16.3212 15.5 14.25 15.5C12.1788 15.5 10.5 13.8211 10.5 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M0 11.75C0 9.6789 1.67877 8 3.75 8C5.82123 8 7.5 9.6789 7.5 11.75C7.5 13.8211 5.82123 15.5 3.75 15.5C1.67877 15.5 0 13.8211 0 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.5 5.74991C3.5 5.33569 3.83579 4.99991 4.25 4.99991H6.1463C6.79606 4.99991 7.39232 5.35989 7.69491 5.93494L8.11711 6.73724C8.31001 7.1038 8.16923 7.55732 7.80267 7.75022C7.43611 7.94311 6.98259 7.80233 6.78969 7.43578L6.36747 6.63344C6.32426 6.55132 6.23913 6.49991 6.1463 6.49991H4.25C3.83579 6.49991 3.5 6.16412 3.5 5.74991Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.3452 5.56468C12.6757 5.81435 12.8181 6.25878 12.5684 6.58929C10.5744 9.22893 7.6988 11.1765 3.99536 12.4587C3.60395 12.5943 3.17678 12.3868 3.04127 11.9954C2.90575 11.604 3.1132 11.1768 3.50462 11.0413C6.98798 9.83528 9.59214 8.04071 11.3715 5.68515C11.6212 5.35464 12.0146 5.31501 12.3452 5.56468Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.74988 2.75C7.74988 2.33579 8.08566 2 8.49988 2H9.92078C10.633 2 11.274 2.43156 11.5421 3.09125L14.9449 11.4677C15.1007 11.8515 14.916 12.289 14.5323 12.4449C14.1485 12.6007 13.711 12.416 13.5551 12.0323L10.1525 3.65595C10.1141 3.56169 10.0225 3.5 9.92078 3.5H8.49988C8.08566 3.5 7.74988 3.16421 7.74988 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Bicycle2;
