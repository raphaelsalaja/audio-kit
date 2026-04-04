import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Import({
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
          d="M12.752 6H5.25201C3.73501 6 2.50201 7.2329 2.50201 8.75V14.25C2.50201 15.7671 3.73501 17 5.25201 17H12.752C14.269 17 15.502 15.7671 15.502 14.25V8.75C15.502 7.2329 14.269 6 12.752 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.46969 10.7803L8.46969 13.7803C8.76269 14.0733 9.23729 14.0733 9.53019 13.7803L12.5302 10.7803C12.8232 10.4873 12.8232 10.0127 12.5302 9.71979C12.2372 9.42689 11.7626 9.42679 11.4697 9.71979L9.74999 11.4395V1.75C9.74999 1.3359 9.41409 1 8.99999 1C8.58589 1 8.24999 1.3359 8.24999 1.75V11.4395L6.53029 9.71979C6.38379 9.57329 6.19189 9.50012 5.99999 9.50012C5.80809 9.50012 5.61619 9.57329 5.46969 9.71979C5.17669 10.0128 5.17669 10.4874 5.46969 10.7803Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Import;
