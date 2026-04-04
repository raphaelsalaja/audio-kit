import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective2({
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
          d="M15.213 2.41818L8.71304 1.05002C8.04414 0.907417 7.36142 1.07589 6.83212 1.50509C6.30382 1.93429 6.00012 2.57098 6.00012 3.25168V10.6858C6.00012 11.7439 6.75213 12.6702 7.78723 12.8879L14.2872 14.2556C14.4425 14.2883 14.5987 14.3044 14.754 14.3044C15.2647 14.3044 15.7618 14.1301 16.1681 13.8015C16.6964 13.3723 17.0001 12.7351 17.0001 12.0539V4.61972C17.0001 3.56162 16.2481 2.63598 15.213 2.41818Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.213 5.11325L3.71304 3.74508C3.04414 3.60248 2.36142 3.77096 1.83212 4.20016C1.30382 4.62936 1.00012 5.26605 1.00012 5.94675V13.3808C1.00012 14.4389 1.75213 15.3653 2.78723 15.583L9.28723 16.9507C9.44253 16.9834 9.59873 16.9995 9.75403 16.9995C10.2647 16.9995 10.7618 16.8251 11.1681 16.4965C11.6964 16.0673 12.0001 15.4302 12.0001 14.749V7.31491C12.0001 6.25681 11.2481 5.33105 10.213 5.11325Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default StackPerspective2;
