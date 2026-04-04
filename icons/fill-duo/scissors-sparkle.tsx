import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ScissorsSparkle({
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
          d="m16.157,12.0075l-1.262-.43-.421-1.27c-.137-.41-.812-.41-.949,0l-.421,1.27-1.262.43c-.204.06-.342.26-.342.47,0,.22.138.41.342.48l1.262.42.421,1.28c.068.2.26.34.475.34s.406-.14.475-.34l.421-1.28,1.262-.42c.204-.07.342-.26.342-.48,0-.21-.139-.41-.343-.47Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m12.7635,7.75c0-.4142.3358-.75.75-.75h2.7365c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-2.7365c-.4142,0-.75-.3358-.75-.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m4,2.5c-1.6572,0-3,1.3428-3,3s1.3428,3,3,3h5.25c.4142,0,.75-.3358.75-.75s-.3358-.75-.75-.75h-2.6512c.2552-.4412.4012-.9535.4012-1.5,0-1.6572-1.3428-3-3-3Zm0,4.5c.8288,0,1.5-.6712,1.5-1.5s-.6712-1.5-1.5-1.5-1.5.6712-1.5,1.5.6712,1.5,1.5,1.5Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m14.5324,3.5282c.2917-.294.2899-.7689-.0042-1.0607-.294-.2917-.7689-.2899-1.0606.0042L4.8943,11.1129c-.5521.5441-.8943,1.3005-.8943,2.1371,0,1.6572,1.3428,3,3,3s3-1.3428,3-3c0-1.3926-.9482-2.5631-2.2343-2.9015l6.7667-6.8203ZM5.9298,12.1987c.0039-.0038.0078-.0076.0116-.0115l.0107-.0107c.2703-.2639.64-.4265,1.0479-.4265.8288,0,1.5.6712,1.5,1.5s-.6712,1.5-1.5,1.5-1.5-.6712-1.5-1.5c0-.4096.1639-.7807.4298-1.0513Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ScissorsSparkle;
