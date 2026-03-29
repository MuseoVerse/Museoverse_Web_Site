function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type AppleIconProps = {
  className?: string;
  fill?: string;
  height?: number;
  opacity?: number;
  width?: number;
};

export function AppleIcon({
  className,
  fill = "#ffe088",
  height = 22,
  opacity = 1,
  width = 18,
}: AppleIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.769 0h.162c.13 1.606-.483 2.806-1.228 3.675-.731.863-1.732 1.7-3.351 1.573-.108-1.583.506-2.694 1.25-3.561C13.292.879 14.557.16 15.769 0zM20.67 16.716v.045c-.455 1.378-1.104 2.559-1.896 3.655-.723.995-1.609 2.334-3.191 2.334-1.367 0-2.275-.879-3.676-.903-1.482-.024-2.297.735-3.652.926h-.462c-.995-.144-1.798-.932-2.383-1.642-1.725-2.098-3.058-4.808-3.306-8.276v-1.019c.105-2.482 1.311-4.5 2.914-5.478.846-.52 2.009-.963 3.304-.765.555.086 1.122.276 1.619.464.471.181 1.06.502 1.618.485.378-.011.754-.208 1.135-.347 1.116-.403 2.21-.865 3.652-.648 1.733.262 2.963 1.032 3.723 2.22-1.466.933-2.625 2.339-2.427 4.74.176 2.181 1.444 3.457 3.028 4.209z"
        fill={fill}
        opacity={opacity}
      />
    </svg>
  );
}

type GooglePlayIconProps = {
  accentFill?: string;
  className?: string;
  height?: number;
  primaryFill?: string;
  secondaryFill?: string;
  width?: number;
};

export function GooglePlayIcon({
  accentFill = "#f3c645",
  className,
  height = 20,
  primaryFill = "#ffe088",
  secondaryFill = "#d3ae44",
  width = 18,
}: GooglePlayIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m281.963 245.846-247.68 247.68c-11.84-11.2-18.24-26.56-18.24-43.2V61.846c0-16.96 6.72-32.32 18.88-43.84l247.04 227.84z"
        fill={primaryFill}
        opacity="1"
      />
      <path
        d="M496.043 256.086c0 22.4-12.16 42.24-32.32 53.44l-70.4 39.04-87.36-80.64-24-22.08 92.48-92.48 89.28 49.28c20.16 11.2 32.32 31.04 32.32 53.44z"
        fill={accentFill}
        opacity="1"
      />
      <path
        d="M281.963 245.846 34.923 18.006c3.2-3.2 7.36-6.08 11.52-8.64 20.16-12.16 44.48-12.48 65.28-.96l262.72 144.96-92.48 92.48z"
        fill={secondaryFill}
        opacity="1"
      />
      <path
        d="m393.323 348.566-281.6 155.2c-9.92 5.76-21.12 8.32-32 8.32-11.52 0-23.04-2.88-33.28-9.28a58.212 58.212 0 0 1-12.16-9.28l247.68-247.68 24 22.08 87.36 80.64z"
        fill={secondaryFill}
        opacity="1"
      />
    </svg>
  );
}

type StoreBadgeContentProps = {
  iconAccentFill?: string;
  iconClassName?: string;
  iconFill?: string;
  iconHeight?: number;
  iconOpacity?: number;
  iconSecondaryFill?: string;
  iconWidth?: number;
  subtitleClassName?: string;
  textClassName?: string;
  textWrapperClassName?: string;
};

export function AppStoreBadgeContent({
  iconClassName,
  iconFill = "#ffe088",
  iconHeight = 22,
  iconOpacity = 1,
  iconWidth = 18,
  subtitleClassName,
  textClassName,
  textWrapperClassName,
}: StoreBadgeContentProps) {
  return (
    <>
      <AppleIcon
        className={iconClassName}
        fill={iconFill}
        height={iconHeight}
        opacity={iconOpacity}
        width={iconWidth}
      />
      <div className={textWrapperClassName}>
        <div className={joinClasses("font-['Manrope'] text-[10px]", subtitleClassName)}>
          Download on the
        </div>
        <div className={joinClasses("font-['Manrope']", textClassName)}>
          App Store
        </div>
      </div>
    </>
  );
}

export function GooglePlayBadgeContent({
  iconAccentFill,
  iconClassName,
  iconFill,
  iconHeight = 20,
  iconSecondaryFill,
  iconWidth = 18,
  subtitleClassName,
  textClassName,
  textWrapperClassName,
}: StoreBadgeContentProps) {
  return (
    <>
      <GooglePlayIcon
        accentFill={iconAccentFill}
        className={iconClassName}
        height={iconHeight}
        primaryFill={iconFill}
        secondaryFill={iconSecondaryFill}
        width={iconWidth}
      />
      <div className={textWrapperClassName}>
        <div className={joinClasses("font-['Manrope'] text-[10px]", subtitleClassName)}>
          Get it on
        </div>
        <div className={joinClasses("font-['Manrope']", textClassName)}>
          Google Play
        </div>
      </div>
    </>
  );
}
