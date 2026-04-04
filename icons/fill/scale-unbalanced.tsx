import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScaleUnbalanced({
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
          d="M12.7452 3.58229L10.9619 8.13154C10.77 8.62124 10.8943 9.23239 11.3633 9.58503C13.0415 10.8471 15.1125 10.8535 16.6835 9.56893C17.1289 9.20464 17.2265 8.6091 17.0393 8.1412L14.673 2.22558C14.6256 2.10457 14.549 2.00146 14.4535 1.92248C14.395 1.87395 14.3292 1.83448 14.2585 1.80561C14.1242 1.75065 13.9729 1.73406 13.8214 1.76587C13.8104 1.76818 13.7994 1.77073 13.7885 1.77352L3.88254 4.26246C3.63533 4.31026 3.42457 4.48048 3.3286 4.72031L0.960701 10.6401C0.7735 11.108 0.871302 11.7036 1.3166 12.0678C2.1252 12.729 3.0662 13.0481 4.0179 13.0301C4.9153 13.0131 5.8223 12.6964 6.6367 12.0839C7.1057 11.7312 7.23 11.12 7.038 10.6303L5.03464 5.51962L12.7452 3.58229ZM2.7328 10.2488L4.0179 7.03592L5.2774 10.2488H2.7328ZM13.9821 4.53707L12.7226 7.75H15.2672L13.9821 4.53707Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9.75 1.75C9.75 1.33579 9.41421 1 9 1C8.58579 1 8.25 1.33579 8.25 1.75V13.25C8.25 14.2165 7.4665 15 6.5 15H4.75C4.3358 15 4 15.3358 4 15.75C4 16.1642 4.3358 16.5 4.75 16.5H6.5H9H11.5H13.25C13.6642 16.5 14 16.1642 14 15.75C14 15.3358 13.6642 15 13.25 15H11.5C10.5335 15 9.75 14.2165 9.75 13.25V1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ScaleUnbalanced;
